import Link from "next/link"

export default function PageNotFound() {
    return (
        <>
            <h1>The page cannot be found.</h1>
            <Link href='/'><button>return home</button></Link>
        </>
    )
}