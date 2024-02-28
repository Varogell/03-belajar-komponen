import Image from 'next/image'
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import Bio from '@/components/bio';
import TodoList from '@/components/todolist';
import MyGallery from '@/components/mygallery';
function Home() {
  return (
    <main className=''>
   <div>
    <MyGallery/>
   </div>
   </main>
  );
}

export default Home;