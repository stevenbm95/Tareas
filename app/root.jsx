import { 
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  
} from '@remix-run/react'

import styles from '~/styles/tailwind.css'
import Header from '~/components/header'

export function meta(){
  return ([
      { charset: 'utf-8'},
      {  title: 'Task Project'},
      {vieport: "with=device-width, initial-scale=1"}
  ])
}

export function links(){
  return [
      {
          rel: 'stylesheet',
          href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
      },{
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com' 
      },{
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: "True"
      },{
                //  rel:"stylesheet",
                // href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
                // integrity:"sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM",
                // crossOrigin:"anonymous",
      },{
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
      },{
          rel: 'stylesheet',
          href: styles
      }
  ]
}

export default function App(){

  return (
      <Document>
          <Outlet />
      </Document>
  );

}



function Document({children}){
  return (
      <html lang="es">
          <head>
              <Meta>Tasks Project</Meta>
              <Links />
              <link  rel= "stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossOrigin="anonymous"
                />
          </head>
          <body>
              <Header />
              {children}
 
              <Scripts />
              <LiveReload />
          </body>
      </html>
  )
}

// export function ErrorBoundary(){

//     const error = useRouteError();

//     if (isRouteErrorResponse(error)) {
//       return (
//         <Document>
//              <p className='error'>{error.status} {error.statusText}</p>
//              <Link className='error-enlace' to="/"> Tal vez quieras volver a la pagina principal</Link>
//         </Document>
        
//       );
//     }
// }
