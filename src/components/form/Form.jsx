import React, { useEffect, useState } from "react";
import { Button, Checkbox, Col, Form, message, Radio, Row, Select } from "antd";
import { formTxt } from "../lang/Statictxt";
import { css } from "@emotion/css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setInputVal } from "../redux/MultiStep/multiSteps";
import { steps } from "../steps/steps";
const CustomForm = ({ data }) => {
  const [disabled, setDisabled] = useState(true);
  const inputVal = useSelector((state) => state.multiStepReducer.inputVal);
  const current = useSelector((state) => state.multiStepReducer.current);
  const dispatch = useDispatch();
  //-----------handle disable next btn-----------------//
  useEffect(() => {
    if (
      (current === 0 && inputVal.checkbox1) ||
      inputVal.checkbox2 ||
      inputVal.checkbox3
    ) {
      setDisabled(false);
    } else if (current === 1 && inputVal.selectbox) {
      setDisabled(false);
    } else if (current === 2 && inputVal.radio) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputVal, current]);
  return (
    <Form name={data.name} className={style}>
      <div className="Formwrapper">
        <div className="question">{data.title}</div>
        <Row gutter={[16, 24]}>
          {data?.items.map((item) => (
            <Col span={24 / data.span} key={item.id}>
              <Form.Item name={item.name} label={item.label}>
                {item.type === "checkbox" ? (
                  <Checkbox
                    checked={inputVal[`checkbox${item.id}`]}
                    onChange={(e) =>
                      dispatch(
                        setInputVal({
                          ...inputVal,
                          [`checkbox${item.id}`]: e.target.checked,
                        })
                      )
                    }
                  >
                    {item.value}
                  </Checkbox>
                ) : item.type === "selectbox" ? (
                  <Select
                    placeholder={formTxt.secondStep.placeholder}
                    value={inputVal?.selectbox || null}
                    onChange={(e) =>
                      dispatch(
                        setInputVal({
                          ...inputVal,
                          selectbox: e,
                        })
                      )
                    }
                  >
                    {item.options.map((option) => (
                      <Select.Option key={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                ) : (
                  <Radio.Group
                    className="customradio"
                    options={item.options}
                    value={inputVal?.radio || null}
                    onChange={(e) =>
                      dispatch(
                        setInputVal({
                          ...inputVal,
                          radio: e.target.value,
                        })
                      )
                    }
                  />
                )}
              </Form.Item>
            </Col>
          ))}
        </Row>
      </div>
      {current < steps.length - 1 && (
        <Button
          disabled={disabled}
          type="primary"
          onClick={() => dispatch(setCurrent(current + 1))}
        >
          {formTxt.next}
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button
          disabled={disabled}
          type="primary"
          onClick={() => {
            message.success(formTxt.success);
          }}
        >
          {formTxt.done}
        </Button>
      )}
      {current > 0 && (
        <Button
          style={{ margin: "0 8px" }}
          onClick={() => dispatch(setCurrent(current - 1))}
        >
          {formTxt.back}
        </Button>
      )}
    </Form>
  );
};

export default CustomForm;
const style = css`
  .Formwrapper {
    padding: 2rem;
  }
  .question {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  .customradio {
    width: 100%;
    .ant-radio-group {
      width: 100%;
    }
    label {
      width: 50%;
      margin: 0;
    }
  }
`;
