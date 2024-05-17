import "../../index.css";
import { CourseProgress } from "../CourseProgress";
import { Sidebar } from "../navigation/Sidebar";

export function Overview() {
  return (
    <>
      <Sidebar username="Freddy Garro" />
      <section className="text-custom-dark grid mx-4 lg:ml-[20rem] mt-[4.1rem]">
        <h1 className="text-2xl font-secondary font-bold mb-5">Progress</h1>
        <div className="grid gap-6 minmax-200">
          <CourseProgress
            courseName="Web Development"
            tasksDone={5}
            tasksTotal={10}
          />
          <CourseProgress
            courseName="Web Designing"
            tasksDone={7}
            tasksTotal={8}
          />
          <CourseProgress
            courseName="Audio and Video Manipulation"
            tasksDone={2}
            tasksTotal={5}
          />
          <CourseProgress
            courseName="App Engineering"
            tasksDone={12}
            tasksTotal={12}
          />
        </div>
      </section>
    </>
  );
}
