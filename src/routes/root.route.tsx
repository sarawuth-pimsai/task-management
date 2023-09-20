import ErrorBoundaryPage from '@pages/error/ErrorBoundaryPage'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  { path: '', errorElement: <ErrorBoundaryPage /> },
]

export default routes
