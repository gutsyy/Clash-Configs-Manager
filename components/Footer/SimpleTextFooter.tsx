type Props = {
  children: React.ReactNode;
};

export const SimpleTextFooter = ({ children }: Props) => {
  return (
    <div className="w-full text-center py-2 text-sm text-slate-900 font-semibold">
      {children}
    </div>
  );
};
