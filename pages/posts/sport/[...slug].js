import { useRouter } from "next/router"


const News = () => {

    const {query:{slug}} = useRouter()

    console.log(slug);
  return (
    <div style={{
        textAlign:"center",
    }}>

        {slug?.map((s)=>(
            <h1 key={s}>{s}</h1>
        ))}
    </div>
  )
}

export default News