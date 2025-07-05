'use client';
import { SignUp, useUser, useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function Page() {
  const { isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState<'clerk' | 'role'>('clerk');
  const [userType, setUserType] = useState<'MERCHANT' | 'CONSUMER'>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isSignedIn && step === 'clerk') {
      setStep('role');
    }
  }, [isSignedIn, step]);

  const handleRoleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType || !user) return;
    setLoading(true);
    setError(null);
    try {
      const token = await getToken();

      const res = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          clerkId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          userType,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al registrar el tipo de usuario');
      }
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'clerk') {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-50'>
        <div className='w-full max-w-md'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900'>
              App de Fidelización
            </h1>
            <p className='mt-2 text-gray-600'>Crea tu cuenta</p>
          </div>
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary:
                  'bg-blue-600 hover:bg-blue-700 text-sm normal-case',
              },
            }}
            afterSignUpUrl='/sign-up' // Mantener en la misma página para el paso 2
          />
        </div>
      </div>
    );
  }

  // Paso 2: Selección de tipo de usuario
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md bg-white p-8 rounded shadow'>
        <h2 className='text-xl font-bold mb-4 text-center'>
          ¿Qué tipo de usuario eres?
        </h2>
        <form onSubmit={handleRoleSubmit} className='space-y-4'>
          <RadioGroup
            value={userType}
            onValueChange={(value) =>
              setUserType(value as 'MERCHANT' | 'CONSUMER')
            }
            required
          >
            <div className='flex flex-col gap-2'>
              <Label className='flex items-center gap-2'>
                <RadioGroupItem value='MERCHANT' /> Comerciante
              </Label>
              <Label className='flex items-center gap-2'>
                <RadioGroupItem value='CONSUMER' /> Consumidor
              </Label>
            </div>
          </RadioGroup>
          {error && <div className='text-red-600 text-sm'>{error}</div>}
          <Button type='submit' className='w-full' disabled={loading}>
            {loading ? 'Guardando...' : 'Continuar'}
          </Button>
        </form>
      </div>
    </div>
  );
}
