import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu";

type Props = {
  children: React.ReactNode;
  title: string | React.ReactNode;
};

export const FlexibleNavbarBox = ({ children, title }: Props) => {
  const [opened, handlers] = useDisclosure(false);

  const drawTitle =
    typeof title === "string" ? (
      <div className="font-semibold pl-5 pt-1 text-slate-900">{title}</div>
    ) : (
      title
    );

  return (
    <>
      <div className="w-screen px-2 sm:hidden">
        <div className="py-2 flex items-center">
          <UseAnimations animation={menu} onClick={handlers.open} />
          <div className="ml-2 font-semibold flex-1 text-center">{title}</div>
        </div>
      </div>
      <Drawer opened={opened} onClose={handlers.close} title={drawTitle}>
        {children}
      </Drawer>
      <div className="max-sm:hidden">{children}</div>
    </>
  );
};
