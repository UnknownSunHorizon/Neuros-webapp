import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

import { Breadcrumb, Layout, Menu, theme, Button, message, Space  } from 'antd';


import './NodeTextPrompt.component.css';

function NodeTextPrompt({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
    type: 'error',
    content: 'Ошибка обработки запроса.',
    });
  };

  return (
    
    <div className="NodeTextPrompt">
      {contextHolder}
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
      <p>Название нейронной сети</p>
        <input id="text" name="text" onChange={onChange} className="nodrag" placeholder="Введите запрос"/>
        <div>
            <p>Блок настроек</p>
        </div>
        <Button onClick={error}>Запуск</Button>
        <div>
            <p>Результат</p>
        </div>
      
    </div>

    
  );
}

export default NodeTextPrompt;
