'use client'
import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Image from 'next/image';
const items = [
  {
    label: <a href="#">Profile</a>,
    key: '0',
  },
  {
    type: 'divider',
    }, 
    {
        label: <a href="#">Logout</a>,
        key: '1',
    },
];

export function ProfileBtn(props) {
    

    return (
        <>
            <Dropdown
                menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: ['0'],
                }}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()} className="inline-block cursor-pointer"> 
                    <Image
                        src={"/images/global/user.webp"}
                        width={48} height={48}
                        alt="User Thumb"
                        className="rounded-full"
                    />  
                </a>
            </Dropdown>
        </>
    )
}
