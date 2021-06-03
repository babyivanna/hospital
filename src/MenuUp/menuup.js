import s from './menuup.module.css';
import { Menu } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';


export let Menuup = (props) => {
    const { SubMenu } = Menu;
    return (
        <div className={s.menuHp}>
            <Menu
                style={{ width: '100%' }}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<CalendarOutlined />} title="Записаться на приём">
                    <Menu.Item key="1">Контакты</Menu.Item>
                    <Menu.Item key="2">Страница регистрации</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<ClockCircleOutlined />} title="Часы работы">
                    <Menu.Item disabled="true" key="3">Понедельник - Пятница.......06.00 - 17.00</Menu.Item>
                    <Menu.Item disabled="true" key="4">Суббота - Воскресенье.......07.30 - 12.00</Menu.Item>
                    <Menu.Item disabled="true" key="5">Праздничные дни.............08.00 - 12.00</Menu.Item>
                </SubMenu>


            </Menu>
           
        </div>
    )
}

