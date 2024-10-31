import getAllUsers from "@/lib/getAllUser"
import Link from "next/link"

export default async function User(){
    const userData:Promise<UserType[]> = getAllUsers()

    const users = await userData

    const content = (
        <section>
            <h2>
                <Link href='/'>Home</Link>
                <br />
                {users.map(user => {
                    return(
                        <>
                         <p key={user.id}>
                            <Link href={`/user/${user.id}`}>{user.name}</Link>
                         </p>
                         <br />
                        </>
                    )
                })}
            </h2>
        </section>
    )
    return content
}