import ItemList from "./item-list";

export default function Page(){
    return(
        <main>
            <p className="bg-slate-950  mt-2 text-white text-3xl">Shopping List</p>
            <ItemList/>
        </main>
    );
}