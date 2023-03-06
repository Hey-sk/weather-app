import Link from "next/link"

export default function PageNotFound() {
    return (
        <>
            <h1>The page cannot be found.</h1>
            <Link href='/'><h3>home</h3></Link>
        </>
    )
}