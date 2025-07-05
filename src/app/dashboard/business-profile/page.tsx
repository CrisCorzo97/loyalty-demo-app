import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import BusinessProfileForm from '../../../components/business/BusinessProfileForm';

export default function BusinessProfilePage() {
  return (
    <main className='max-w-2xl mx-auto py-8 px-4'>
      <Card>
        <CardHeader>
          <CardTitle>Perfil de Negocio</CardTitle>
        </CardHeader>
        <CardContent>
          <BusinessProfileForm />
        </CardContent>
      </Card>
    </main>
  );
}
