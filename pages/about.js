import Layout from '@/components/Layout'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <Layout
        title='About Africheza'>
            <h1>About</h1>
            <p>An app about Africheza</p>
            <p>
                version 1
            </p>
            <Link href='/'>Home</Link>
        </Layout>
    )
}
