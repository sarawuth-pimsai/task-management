import { useRouteError } from "react-router-dom"

export default function ErrorBoundary() {
    const error = useRouteError() as {statusText?:string, message?:string}
  return (
    <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            {error.statusText ? error.statusText : error.message}
        </p>
    </div>
  )
}