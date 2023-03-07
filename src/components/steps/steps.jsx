import CustomForm from "../form/Form";
import { formTxt } from "../lang/Statictxt";

export const stepContent = [
  {
    name: formTxt.firstStep.name,
    title: formTxt.firstStep.title,
    span: 4,
    items: [
      {
        id: "1",
        name: "filed1",
        type: formTxt.firstStep.type,
        value: formTxt.firstStep.item1,
      },
      {
        id: "2",
        name: "filed2",
        type: formTxt.firstStep.type,
        value: formTxt.firstStep.item2,
      },
      {
        id: "3",
        name: "filed3",
        type: formTxt.firstStep.type,
        value: formTxt.firstStep.item3,
      },
    ],
  },
  {
    name: formTxt.secondStep.name,
    title: formTxt.secondStep.title,
    span: 3,
    items: [
      {
        type: formTxt.secondStep.type,
        id: 1,
        options: [
          {
            value: "1",
            label: "پر شدن سریع ظرفیت اینترنتی",
          },
          {
            value: "2",
            label: "مشکل در اتصال",
          },
          {
            value: "3",
            label: "پاسخ گویی ضعیف پشتیبانی",
          },
        ],
      },
    ],
  },
  {
    name: formTxt.thirdStep.name,
    title: formTxt.thirdStep.title,
    span: 1,
    items: [
      {
        type: formTxt.thirdStep.type,
        id: 1,
        options: [formTxt.thirdStep.item1, formTxt.thirdStep.item2],
      },
    ],
  },
];
export const steps = [
  {
    id: 1,
    content: <CustomForm data={stepContent[0]} />,
  },
  {
    id: 2,
    content: <CustomForm data={stepContent[1]} />,
  },
  {
    id: 3,
    content: <CustomForm data={stepContent[2]} />,
  },
];
