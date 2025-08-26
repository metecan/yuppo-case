import EditorLayout from "src/components/layouts/EditorLayout";

interface EditorPageLayoutProps {
  children: React.ReactNode;
}

const EditorPageLayout = ({ children }: EditorPageLayoutProps) => {
  return <EditorLayout>{children}</EditorLayout>;
};

export default EditorPageLayout;
