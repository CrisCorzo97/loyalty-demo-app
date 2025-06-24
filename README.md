# App de Fidelización 🎯

Una aplicación web moderna para ayudar a comercios gastronómicos a fidelizar clientes a través de un sistema de premios basado en consumisiones.

## 🚀 Características Principales

### Para Comerciantes

- **Gestión de Empleados**: Alta/baja y asignación de roles
- **Administración de Premios**: Crear y configurar recompensas
- **Registro de Consumisiones**: Validación por DNI del cliente
- **Gestión de Canjes**: Validación con códigos de seguridad
- **Métricas y Analíticas**: Dashboards con insights de negocio

### Para Consumidores

- **Exploración de Comercios**: Descubrir negocios adheridos
- **Historial de Consumisiones**: Seguimiento de puntos acumulados
- **Gestión de Premios**: Visualizar y canjear recompensas

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: Shadcn/ui
- **Base de Datos**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Autenticación**: Clerk
- **Despliegue**: Vercel (recomendado)

## 📋 Prerrequisitos

- Node.js 18+
- npm o yarn
- Cuenta en [Supabase](https://supabase.com)
- Cuenta en [Clerk](https://clerk.dev)

## ⚡ Instalación Rápida

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd loyalty-demo-app
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.example .env
   ```

   Completa las variables en `.env` siguiendo la [Guía de Configuración](./SETUP.md)

4. **Configurar la base de datos**

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

6. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
loyalty-demo-app/
├── app/                    # App Router de Next.js
│   ├── dashboard/         # Panel principal
│   ├── sign-in/          # Página de inicio de sesión
│   ├── sign-up/          # Página de registro
│   ├── layout.tsx        # Layout principal con Clerk
│   └── page.tsx          # Página de inicio
├── components/           # Componentes reutilizables
│   └── ui/              # Componentes de Shadcn/ui
├── lib/                 # Utilidades y configuraciones
│   ├── utils.ts         # Funciones utilitarias
│   └── generated/       # Cliente de Prisma generado
├── prisma/              # Esquemas de base de datos
│   └── schema.prisma    # Modelos de datos
├── public/              # Archivos estáticos
├── .env                 # Variables de entorno (no incluido)
├── .env.example         # Plantilla de variables
├── middleware.ts        # Middleware de autenticación
├── SETUP.md            # Guía detallada de configuración
└── PRD.txt             # Documento de requisitos
```

## 🗄️ Modelos de Datos

### Principales Entidades

- **User**: Usuarios (comerciantes y consumidores)
- **Business**: Comercios/negocios
- **Employee**: Empleados con roles
- **Reward**: Premios y recompensas
- **Consumption**: Registro de consumisiones
- **Redemption**: Canjes de premios

## 🔐 Autenticación y Roles

### Tipos de Usuario

- **MERCHANT**: Propietarios de comercios
- **CONSUMER**: Clientes consumidores

### Roles de Empleados

- **ADMIN**: Acceso completo
- **MANAGER**: Gestión operativa
- **CASHIER**: Solo registro de consumisiones

## 🎨 Componentes UI

El proyecto utiliza Shadcn/ui con Tailwind CSS para una interfaz moderna y consistente:

- Componentes accesibles y personalizables
- Tema configurable con CSS variables
- Iconos de Lucide React
- Diseño responsive

## 📊 Base de Datos

### Configuración con Supabase

1. Crear proyecto en Supabase
2. Obtener cadena de conexión PostgreSQL
3. Configurar `DATABASE_URL` en `.env`
4. Ejecutar migraciones con Prisma

### Comandos Útiles de Prisma

```bash
# Ver base de datos en el navegador
npx prisma studio

# Resetear base de datos
npx prisma migrate reset

# Generar cliente después de cambios
npx prisma generate
```

## 🚦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Linter de código

# Base de datos
npx prisma studio    # Interfaz web de BD
npx prisma generate  # Generar cliente
npx prisma migrate   # Ejecutar migraciones
```

## 🔧 Configuración Adicional

### Variables de Entorno

Ver [SETUP.md](./SETUP.md) para la configuración completa de:

- Supabase (PostgreSQL)
- Clerk (Autenticación)
- Variables de aplicación

### Personalización de Tema

Los colores y estilos se pueden personalizar en:

- `app/globals.css` - Variables CSS globales
- `tailwind.config.ts` - Configuración de Tailwind
- `components.json` - Configuración de Shadcn/ui

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Desplegar automáticamente

### Otras Plataformas

- Netlify
- Railway
- Render
- Heroku

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- Crear un [Issue](../../issues)
- Consultar la [documentación](./SETUP.md)
- Revisar el [PRD](./PRD.txt) para entender los requisitos

---

**¡Gracias por usar la App de Fidelización!** 🎉
