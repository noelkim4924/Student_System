import { ReactNode } from "react";

type HomePageProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

const HomePage = ({ title = "Title", subtitle = "Subtitle", children }: HomePageProps) => (
  <div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <p>{children}</p>
  </div>
);

export default HomePage;
