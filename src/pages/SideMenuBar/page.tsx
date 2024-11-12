"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import { MdMenuOpen } from "react-icons/md";
import { FaLock } from "react-icons/fa"; // Import the lock icon
import data from '@/utils/data';
import Input from '@/utils/Input';
import Button from '@/utils/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

function Sidebar({ setSidebarWidth }) {
	const [localData, setLocalData] = useState(data);
	const [searchText, setSearchText] = useState("");
	const isLoggedIn =useSelector((state)=>state.isLoggedIn) // Track user login status

	const handleSearch = () => {
		const newData = localData.filter((item) => item);
		setLocalData(newData);
	};

	useEffect(() => {
		if (!searchText.length) {
			setLocalData(data);
		}
	}, [searchText]);

	return (
		<div className="flex items-start transition-transform duration-300">
			<div className="bg-primary-100 bg-opacity-10 h-[93vh] overflow-hidden">
				<div className="flex items-center w-full pt-5 space-x-2 place-content-center">
					<Input
						placeholder="eg. Infinite Scroll"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						style="w-[60%]"
						isSearch={true}
					/>
					{/* <Button variant='secondary' style="w-20" text="Search" onClick={handleSearch} /> */}
				</div>

				<div className="flex flex-col my-10 scrollbar h-[80%] overflow-y-scroll">
					{data &&
						data.map((item, i) => (
							<Link href={isLoggedIn || !item.isRestricted ? `/component/${item.id}` : "#"} key={item.id}>
								<div
									className={`${usePathname() === `/component/${item.id}` ? 'bg-primary-300 font-semibold' : ''}  flex justify-between mx-5 rounded-md p-2 transition-transform duration-300  items-center`}
								>
									<span className={`${item.isRestricted && !isLoggedIn?'text-gray-500':''}`}
																			title ={`${item.isRestricted && !isLoggedIn?'Log in to access this feature':''}`}>{item.name}
									</span>
									{item.isRestricted && !isLoggedIn && (
										<span
											className="ml-2 text-secondary-500 cursor-pointer"
											title="Log in to access this feature"
										>
											<FaLock />
										</span>
									)}
								</div>
							</Link>
						))}
				</div>
			</div>
			<div>
				<button className="text-2xl text-secondary-600" onClick={() => setSidebarWidth((prev) => !prev)}>
					<MdMenuOpen />
				</button>
			</div>
		</div>
	);
}

export default Sidebar;
