import styles from './styles/pipeline.module.css';
import React , {useCallback, useState } from 'react';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme, Button, message, Space  } from 'antd';

import MenuItem from 'antd/es/menu/MenuItem';

import {Link} from "react-router-dom";

import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    applyEdgeChanges, 
    applyNodeChanges 
  } from 'reactflow';

import 'reactflow/dist/style.css';

import NodeTextPrompt from '../../components/NodeTextPrompt/NodeTextPrompt';


const initialNodes = [
    { id: 'node-1',style: {
        width: 525,
        height: "20vh",
        color: "#000",
        fontSize: "20px",
      }, type: 'AIPrompt', position: { x: 50, y: 100 }, data: { value: 123 } },
      { id: 'node-2',style: {
        width: 525,
        height: "20vh",
        color: "#000",
        fontSize: "20px",
      }, type: 'AIPrompt', position: { x: 600, y: 100 }, data: { value: 123 } },
      
];

const nodeTypes = { AIPrompt: NodeTextPrompt };

const Pipeline = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);
  
    const onNodesChange = useCallback(
      (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
      [setNodes]
    );
    const onEdgesChange = useCallback(
      (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      [setEdges]
    );
    const onConnect = useCallback(
      (connection) => setEdges((eds) => addEdge(connection, eds)),
      [setEdges]
    );
  
    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
      messageApi.open({
      type: 'error',
      content: 'В данный момент эта функция в бета-тестировании!.',
      });
    };
  
    return (
    <div style={{ width: '100vw', height: '90vh'}}>
        {contextHolder}
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
        >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
        </ReactFlow>

        <div style={{ display: "flex", flexDirection:"row", justifyContent: "flex-start", gap:"70vw", paddingLeft:"3vw"}} >
            <Link to="/pipelist"><Button>Назад</Button></Link>
        <div style={{ display: "flex", flexDirection:"row", justifyContent: "flex-end", gap:"7vw", paddingRight: "3vw"}} >
            <Button onClick={error}>Редактировать</Button>
            <Button onClick={error}>Удалить</Button>
        </div>
        </div>
    </div>
    );
}

export default Pipeline

