import AboutMe from "@/components/AboutMe";
import RecentPosts from "@/components/RecentPosts";
import SelectCategory from "@/components/SelectCategory";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Showcase />
      <AboutMe />
      <SelectCategory />
    </main>
  );
}
