import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section section-narrow not-found">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </section>
  )
}

export default NotFound
