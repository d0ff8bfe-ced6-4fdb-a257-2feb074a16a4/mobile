import cls from "./TaskCard.module.scss"
import {DetailedHTMLProps, LiHTMLAttributes} from "react";


export interface TaskCard extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    title: string
    subtasts: {
        value: string,
        label: string
    }[]
    badge: {
        value: string,
        label: string
    }[]

}

export const TaskCard = (props: TaskCard) => {
    return (
        <div className={cls.wrapper}>
            <h5>
                {props.title}
            </h5>
            <ul className={cls.subtaskList}>
                {props.subtasts.map((item) => (
                    <li className={cls.subtaskListItem}>
                        {item.label}
                    </li>
                ))}
            </ul>
            <ul className={cls.badgeList}>
                {props.badge.map((item) => (
                    <li className={cls.badgeListItem}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

