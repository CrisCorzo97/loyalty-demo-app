import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
            <UserButton afterSignOutUrl='/' />
          </div>
        </div>
      </header>

      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <div className='border-4 border-dashed border-gray-200 rounded-lg p-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              ¡Bienvenido, {user.firstName}!
            </h2>
            <p className='text-gray-600'>
              Tu aplicación de fidelización está lista. Aquí podrás gestionar
              tus comercios, empleados y premios.
            </p>
            <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='bg-white p-6 rounded-lg shadow'>
                <h3 className='text-lg font-medium text-gray-900'>Comercios</h3>
                <p className='mt-2 text-sm text-gray-600'>
                  Gestiona tus comercios
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow'>
                <h3 className='text-lg font-medium text-gray-900'>Empleados</h3>
                <p className='mt-2 text-sm text-gray-600'>
                  Administra tu equipo
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow'>
                <h3 className='text-lg font-medium text-gray-900'>Premios</h3>
                <p className='mt-2 text-sm text-gray-600'>
                  Configura recompensas
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
