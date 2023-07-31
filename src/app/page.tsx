import { Header } from "@/components/Header";
import { Post } from "@/components/Post";


export default function Home() {
  return (
    <>
      <Header/>
      <main className="w-full max-w-[1120px] flex flex-col mx-auto pb-12 min-h-[100vh]">
        <div className="">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </main>
    </>
  )
}
