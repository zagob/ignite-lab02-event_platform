import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [open, setOpen] = useState(false);
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);

  const resizeHanlder = () => {
    const width = window.innerWidth;

    setSizeWindow(width);
  };

  // useEffect(() => {
  //   if()
  // }, [slug])

  useEffect(() => {
    window.onresize = resizeHanlder;
  }, []);

  useEffect(() => {
    if (sizeWindow >= 1024) {
      setOpen(false);
    }
    if (slug) {
      setOpen(false);
    }
  }, [sizeWindow, slug]);

  function handleChangeStateNavbar() {
    setOpen((old) => !old);
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header state={open} onChangeStateNavbar={handleChangeStateNavbar} />
      <main className="relative flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar sidebarMobile={open} />
      </main>
    </div>
  );
}
