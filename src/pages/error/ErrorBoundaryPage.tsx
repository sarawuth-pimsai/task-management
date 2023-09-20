import { useRouteError } from "react-router-dom"

export default function ErrorBoundaryPage() {
    const error = useRouteError() as {message?:string, statusText?:string}
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