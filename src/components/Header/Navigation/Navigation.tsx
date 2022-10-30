import Link from 'next/link';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

import { useAppDispatch } from '../../../hooks/reduxHooks';
import { useGetCategoriesQuery } from '../../../store/reducers/itemSlice';
import style from './Navigation.module.scss';

const Navigation: React.FC = () => {
    const [numberOfCategory, setNumberOfCategory] = useState(0);

    const NumberItemsInCard = useSelector((state) => state.card);

    const { data } = useGetCategoriesQuery();
    return (
        <>
            <div className={style.row}>
                {data?.slice(numberOfCategory, numberOfCategory + 8).map((genres) => (
                    <React.Fragment key={uuid()}>
                        <div>
                            <Link href={`/Categories/${genres}`}>
                                <p>{genres}</p>
                            </Link>
                        </div>
                    </React.Fragment>
                ))}
                <button onClick={() => setNumberOfCategory(numberOfCategory + 1)} className={style.btnPlus}>
                    +
                </button>

                <button onClick={() => setNumberOfCategory(numberOfCategory - 1)} className={style.btnMinus}>
                    -
                </button>
            </div>
        </>
    );
};

export default Navigation;
