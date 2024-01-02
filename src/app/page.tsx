"use client"

import {Button, Datepicker, Input, Modal, Theme} from "@custom/ui";
import { useUpdateValue, useFetchApi } from "@custom/hooks";
import {Fragment, useState} from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";


export default function Home() {
  const [value, updateValue] = useUpdateValue();
  const response = useFetchApi('https://jsonplaceholder.typicode.com/todos');
  const [showModal, setShowModal] = useState(false)

  return (
    <Fragment>
      <Theme>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="max-w-5xl w-full items-center font-mono text-sm ">
            {/*<div className="mt-[-50px]">*/}
            {/*  <p>{value}</p>*/}
            {/*  <Button*/}
            {/*    className="w-[100px] h-[40px] bg-green-500 text-white rounded-[10px] hover:bg-blue-600 cursor-pointer"*/}
            {/*    onClick={() => updateValue('new value')}*/}
            {/*    width={200}*/}
            {/*    height={40}*/}
            {/*    // variant="primary"*/}
            {/*  >*/}
            {/*    Click Me!*/}
            {/*  </Button>*/}
            {/*  <Input width={200} height={50} placeholder="please enter text"/>*/}
            {/*</div>*/}
            {/*<div className="flex justify-center items-center">*/}
            {/*  <div>*/}
            {/*    {response.map((item:{ userId: number, title: string }) => {*/}
            {/*        return (*/}
            {/*          <p key={item.userId}>*/}
            {/*            {item.title}*/}
            {/*          </p>*/}
            {/*        )*/}
            {/*      })}*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<Button*/}
            {/*  className="w-[100px] h-[40px] bg-green-500 text-white rounded-[10px] hover:bg-blue-600 cursor-pointer"*/}
            {/*  onClick={() => setShowModal(true)}*/}
            {/*>*/}
            {/*  Show Modal*/}
            {/*</Button>*/}
            {/*<Datepicker/>*/}
            {/*<ConnectButton/>*/}
          </div>
        </main>
      </Theme>
      {/*<Modal isVisible={showModal} onClose={() => setShowModal(false)}>*/}
      {/*  <div className="p-6">*/}
      {/*    <h3 className="text-xl font-semibold text-gray-900 mb-5">*/}
      {/*      Modal Title*/}
      {/*    </h3>*/}
      {/*    <p className="mb-5 font-normal text-gray-500">*/}
      {/*      Danh sách Thẻ công việc NREGA toàn quốc là một ứng dụng Android được phát triển bởi*/}
      {/*      dịch vụ GVU App Of India. Nó thuộc danh mục Giáo dục & Tham khảo, cụ thể là Tạp chí & Báo.*/}
      {/*      Ứng dụng này cho phép người dùng tìm kiếm và tải xuống thẻ công việc Mnrega của họ bằng cách cung*/}
      {/*      cấp thông tin cơ bản hoặc số thẻ công việc.*/}
      {/*    </p>*/}
      {/*    <p className="mb-5 font-normal text-gray-500">*/}
      {/*      Vui lòng lưu ý rằng ứng dụng này không phải là một ứng dụng chính thức và không liên kết,*/}
      {/*      tài trợ hoặc tài trợ bởi bất kỳ doanh nghiệp chính phủ nào. Nó chỉ cung cấp dữ liệu từ trang*/}
      {/*      web chính phủ, có sẵn miễn phí trong miền công cộng. Ứng dụng không yêu cầu bất kỳ thông tin cá nhân nào,*/}
      {/*      nhưng người dùng nên nhận thức rằng trang web chính phủ có thể yêu cầu họ cung cấp dữ liệu tự chịu rủi ro.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</Modal>*/}
    </Fragment>
  );
}
