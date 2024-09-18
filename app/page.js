import Link from "next/link";
export default function page(){
  return(
    <main className="bg-neutral-200 " >
      <h1 className="text-2xl py-3 text-lime-700" >CPRG 306: Web Development 2 - Assignments </h1>
      <Link href="./week-2" className="text-violet-700 pl-2">Week-2 assignments</Link>
    </main>
  );
}