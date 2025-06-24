# Guía de Configuración - App de Fidelización

## Variables de Entorno Requeridas

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

### Base de Datos (Supabase)

```
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
```

### Autenticación (Clerk)

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### Configuración de la App

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Pasos de Configuración

### 1. Configurar Supabase

1. Crea una cuenta en [Supabase](https://supabase.com)
2. Crea un nuevo proyecto
3. Ve a Settings > Database
4. Copia la cadena de conexión PostgreSQL
5. Pégala en `DATABASE_URL` en tu archivo `.env`

### 2. Configurar Clerk

1. Crea una cuenta en [Clerk](https://clerk.dev)
2. Crea una nueva aplicación
3. Ve a API Keys
4. Copia las claves y pégalas en tu archivo `.env`

### 3. Ejecutar Migraciones de Prisma

Una vez configuradas las variables de entorno:

```bash
# Generar primera migración
npx prisma migrate dev --name init

# Generar cliente de Prisma
npx prisma generate
```

### 4. Verificar Configuración

```bash
# Verificar conexión a la base de datos
npx prisma db push

# Ver la base de datos en el navegador
npx prisma studio
```
