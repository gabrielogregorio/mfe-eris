import { ReactElement, ReactNode, useState } from "react";
import { BaseLayout } from "./baseLayout";

const Message = ({
  isSend,
  children,
}: {
  isSend: boolean;
  children: ReactNode;
}): ReactElement => {
  const isSendStyle = isSend
    ? "mr-16 rounded-tr-[1rem] rounded-tl-[1rem] rounded-br-[1rem]"
    : "ml-16 rounded-tl-[1rem] rounded-tr-[1rem] rounded-bl-[1rem]";

  return (
    <div className="flex items-end w-full">
      {isSend ? <div className="px-2 text-[1rem]">🤖</div> : ""}
      <div
        className={`bg-[#EFEFEF] w-full text-[12px] px-4 py-4 ${isSendStyle}`}
      >
        {children}
      </div>
      {isSend ? "" : <div className="px-2 text-[1rem]">😎</div>}
    </div>
  );
};

export default function Root(props) {
  const [ask, setAsk] = useState<string>("");

  return (
    <BaseLayout>
      <div className="h-full flex flex-col items-center justify-end">
        <div className="max-w-[700px] flex flex-col gap-4 mt-2 w-full">
          <Message isSend={false}>Message 1</Message>

          <Message isSend>Message 2</Message>

          <Message isSend={false}>Message 3</Message>

          <Message isSend>Message 4</Message>

          <Message isSend={false}>Message 5</Message>

          <Message isSend={false}>Message 6</Message>

          <Message isSend>Message 7</Message>

          <Message isSend={false}>Message 8</Message>

          <Message isSend={false}>Message 9</Message>

          <Message isSend>Message 10</Message>

          <Message isSend={false}>Message 11</Message>

          <Message isSend>Message 12</Message>

          <Message isSend>Message 13</Message>

          <Message isSend={false}>Message 14</Message>

          <Message isSend={false}>Message 15</Message>

          <Message isSend>Message 16</Message>

          <Message isSend={false}>Message 17</Message>

          <Message isSend>Message 18</Message>

          <div className="h-[10rem]"></div>
        </div>
      </div>

      <div className="bg-[#EEEEEE] w-full p-4 shadow-sm flex items-center justify-center fixed bottom-0 left-0">
        <div className="rounded-xl w-full flex border-2 border-[#DDDDDD] bg-white  max-w-[700px]">
          <input
            type="text"
            value={ask}
            className="w-full font-[500] rounded-xl outline-none text-[#333333] px-4 py-2 text-[12px]"
            onChange={(event) => setAsk(event.target.value)}
          />
          <button type="button" className="px-4 py-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.457 0.218777C19.8516 0.492215 20.0586 0.964871 19.9844 1.43753L17.4844 17.6875C17.4258 18.0664 17.1953 18.3985 16.8594 18.586C16.5234 18.7735 16.1211 18.7969 15.7656 18.6485L11.0937 16.7071L8.41797 19.6016C8.07031 19.9805 7.52344 20.1055 7.04297 19.918C6.5625 19.7305 6.25 19.2657 6.25 18.75V15.4844C6.25 15.3282 6.30859 15.1797 6.41406 15.0664L12.9609 7.9219C13.1875 7.67581 13.1797 7.2969 12.9453 7.06253C12.7109 6.82815 12.332 6.81253 12.0859 7.03518L4.14063 14.0938L0.691406 12.3672C0.277344 12.1602 0.0117189 11.7461 1.15157e-07 11.2852C-0.0117186 10.8242 0.230469 10.3946 0.628906 10.1641L18.1289 0.16409C18.5469 -0.0741915 19.0625 -0.050754 19.457 0.218777Z"
                fill="#333333"
              />
            </svg>
          </button>
        </div>
      </div>
    </BaseLayout>
  );
}
