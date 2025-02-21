type AboutPageProps = {
  message: string;
};

const AboutPage = ({ message }: AboutPageProps) => (
  <section>
    <h3>{message}</h3>
  </section>
);

export default AboutPage;
