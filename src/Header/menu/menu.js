import { Menu } from 'antd';
import f from './menu.module.css'
import { UserOutlined, CheckSquareOutlined, PlusOutlined   } from '@ant-design/icons';

const { SubMenu } = Menu;

export let TopMenu = () => {

    let handleClick = e => {
        console.log('click ', e);
    };

    let state = {
        current: 'mail',
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[state.current]} mode="horizontal" >
            <SubMenu  key="SubMenu" icon={<UserOutlined />} title="Пациенту">
                    <Menu.Item key="setting:1">Обращения граждан</Menu.Item>
                    <Menu.Item key="setting:2">Правила и положения</Menu.Item>
                    <Menu.Item key="setting:3">Перечень лекарственных препаратов</Menu.Item>
                    <Menu.Item key="setting:4">Диспансеризация</Menu.Item>
            </SubMenu>
            <SubMenu  key="SubMenu2" icon={<CheckSquareOutlined />} title="Услуги">
                    <Menu.Item key="setting:5">О бесплатной медицинской помощи</Menu.Item>
                    <Menu.Item key="setting:6">Платные услуги</Menu.Item> 
            </SubMenu>
            <SubMenu  key="SubMenu3" icon={<PlusOutlined />} title="Наша организация">
                    <Menu.Item key="setting:7">Страховые органы</Menu.Item>
                    <Menu.Item key="setting:8">Права и обязанности граждан</Menu.Item> 
                    <Menu.Item key="setting:9">Деятельность учереждения</Menu.Item> 
                    <Menu.Item key="setting:10">Вакансии</Menu.Item> 
                    <Menu.Item key="setting:11">Медицинские работники</Menu.Item> 
            </SubMenu>
        </Menu>
    )
}