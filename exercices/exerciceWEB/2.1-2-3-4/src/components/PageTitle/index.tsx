interface PageTitlePropos {
  title: string;
}

const PageTitle = (props: PageTitlePropos) => {
  return <h1>{props.title}</h1>;
};

export default PageTitle;
