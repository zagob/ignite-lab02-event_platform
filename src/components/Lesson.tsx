import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: slugParams } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);
  const isActiveUrlSlug = slugParams === slug;
  const availableDateFormatted = format(
    availableAt,
    "EEEE ' • 'd' de 'MMMM' • 'k'h'mm ",
    {
      locale: ptBR,
    }
  );

  return (
    <Link
      to={isLessonAvailable ? `/event/lesson/${slug}` : ``}
      className="group"
    >
      <span
        className={`${isLessonAvailable ? "text-gray-300" : "text-gray-500"}`}
      >
        {availableDateFormatted}
      </span>

      <div
        className={`relative rounded border p-4 mt-2
       ${
         isActiveUrlSlug
           ? `
     bg-green-500
       before:content-[''] 
       before:absolute 
       before:ml-[-25px] 
       before:mt-4 
       before:border-t-[10px] 
       before:border-b-[10px] 
       before:border-r-[10px] 
       before:border-b-transparent 
       before:border-t-transparent 
     before:border-r-green-500 
       before:block
     border-green-500
       cursor-default
       `
           : ""
       }
       ${
         isLessonAvailable
           ? `
       border-gray-500
       group-hover:border-green-500
       `
           : `
       cursor-not-allowed
       border-gray-500
       hover:border-gray-500
       opacity-40
       `
       }
        `}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className={`text-gray-200  mt-5 block`}>{title}</strong>
      </div>
    </Link>
  );
}
