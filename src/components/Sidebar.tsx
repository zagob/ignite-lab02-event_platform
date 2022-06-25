import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
//       availableAt
//       id
//       lessonType
//       slug
//       title
//     }
//   }
// `;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

interface SidebarProps {
  sidebarMobile: boolean;
  widthMobile: number;
}

export function Sidebar({ sidebarMobile, widthMobile }: SidebarProps) {
  // const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={`
      transition duration-700
      ${
        sidebarMobile
          ? `
      absolute
      right-0
      w-full 
      h-full 
      z-20 
      lg:block 
      lg:w-[348px] 
      bg-gray-700 
      p-6 border-l
      border-gray-600
      overflow-hidden
      translate-x-0
      `
          : `
          ${widthMobile < 1024 ? "absolute h-full" : ""}
      border
      translate-x-full
      lg:translate-x-0
      w-full 
      z-20
      lg:right-0
      lg:block 
      lg:w-[348px] 
      bg-gray-700 
      p-6 border-l 
      border-gray-600
      `
      }
      
      `}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
