import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className='mb-8'>
      <h2 className='text-lg font-semibold mb-4 text-primary/90'>{title}</h2>
      <div className='space-y-4'>{children}</div>
    </section>
  );
}

function BusinessProfileForm() {
  return (
    <form>
      <Section title='Datos básicos'>
        <div>
          <Label className='mb-1'>
            Nombre del negocio <span className='text-red-500'>*</span>
          </Label>
          <Input type='text' required />
        </div>
        <div>
          <Label className='mb-1'>Descripción breve</Label>
          <Textarea rows={2} />
        </div>
        <div>
          <Label className='mb-1'>
            Tipo de negocio <span className='text-red-500'>*</span>
          </Label>
          <Select required>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Selecciona un tipo' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Restaurante'>Restaurante</SelectItem>
              <SelectItem value='Bar'>Bar</SelectItem>
              <SelectItem value='Cafetería'>Cafetería</SelectItem>
              <SelectItem value='Heladería'>Heladería</SelectItem>
              <SelectItem value='Panadería'>Panadería</SelectItem>
              <SelectItem value='Food Truck'>Food Truck</SelectItem>
              <SelectItem value='Otro'>Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Section>
      <Section title='Contacto'>
        <div>
          <Label className='mb-1'>
            Dirección <span className='text-red-500'>*</span>
          </Label>
          <Input
            type='text'
            placeholder='Calle y número'
            required
            className='mb-2'
          />
          <div className='flex gap-2'>
            <Input type='text' placeholder='Ciudad' required />
            <Input type='text' placeholder='Provincia/Estado' required />
          </div>
          <div className='flex gap-2 mt-2'>
            <Input
              type='text'
              placeholder='Código postal'
              required
              className='w-1/2'
            />
            <Select required>
              <SelectTrigger className='w-1/2'>
                <SelectValue placeholder='Argentina' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Argentina'>Argentina</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className='mb-1'>
            Teléfono de contacto <span className='text-red-500'>*</span>
          </Label>
          <div className='flex gap-2'>
            <Select required>
              <SelectTrigger className='w-1/3'>
                <SelectValue placeholder='+54 (Argentina)' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='+54'>+54 (Argentina)</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type='text'
              placeholder='Número'
              required
              className='w-2/3'
            />
          </div>
        </div>
        <div>
          <Label className='mb-1'>
            Correo electrónico <span className='text-red-500'>*</span>
          </Label>
          <Input type='email' required />
        </div>
        <div>
          <Label className='mb-1'>Sitio web</Label>
          <Input type='url' />
        </div>
        <div>
          <Label className='mb-1'>Redes sociales</Label>
          <div className='flex flex-col gap-2'>
            <Input type='url' placeholder='Instagram' />
            <Input type='url' placeholder='Facebook' />
            <Input type='url' placeholder='Otra' />
          </div>
        </div>
      </Section>
      <Section title='Branding'>
        <div>
          <Label className='mb-1'>
            Logo del negocio{' '}
            <span className='text-gray-500 text-xs'>
              (1:1 recomendado, ej: 400x400px)
            </span>
          </Label>
          <Input type='file' accept='image/*' />
        </div>
        <div className='flex gap-4'>
          <div className='w-1/2'>
            <Label className='mb-1'>Color primario</Label>
            <Input type='color' className='w-10 h-10 p-0 border-0' />
            <Input
              type='text'
              placeholder='#000000 o rgb(0,0,0)'
              className='mt-1'
            />
          </div>
          <div className='w-1/2'>
            <Label className='mb-1'>Color secundario</Label>
            <Input type='color' className='w-10 h-10 p-0 border-0' />
            <Input
              type='text'
              placeholder='#FFFFFF o rgb(255,255,255)'
              className='mt-1'
            />
          </div>
        </div>
      </Section>
      <Section title='Horarios de atención'>
        <div className='space-y-2'>
          {/* Aquí iría el subcomponente de horarios estructurados, por ahora un placeholder */}
          <div className='bg-gray-50 border border-gray-200 rounded p-4 text-gray-500 text-sm'>
            [Selector de horarios estructurados aquí]
          </div>
        </div>
      </Section>
      <div className='flex justify-end'>
        <Button type='submit'>Guardar</Button>
      </div>
    </form>
  );
}

export default BusinessProfileForm;
