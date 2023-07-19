import {redirect} from "next/navigation";

export default function Home() {
    console.log("GET /")
    redirect('/games')
}
