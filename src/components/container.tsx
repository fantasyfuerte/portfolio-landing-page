interface ContainerProps {
  children: React.ReactNode;
}

function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-40 mt-40 md:pb-0 md:px-6">
      {children}
    </div>
  );
}

export default Container;
