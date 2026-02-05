export function StackedList() {
	const _people = [
		{
			name: "John Doe",
			age: 30,
			city: "New York",
		},
		{
			name: "Jane Doe",
			age: 25,
			city: "Los Angeles",
		},
		{
			name: "Jim Doe",
			age: 35,
			city: "Chicago",
		},
	];
	return (
		<div className="w-full h-full flex flex-col gap-4 bg-[#111828] p-40">
			{_people.map((person) => (
				<div key={person.name} className="flex items-center p-4 border-b border-[#212736]">
					<div className="flex items-center gap-4 flex-1">
						<div>
							<img src="https://placehold.co/60x60" alt="" className="w-10 h-10 rounded-full" />
						</div>
						<div className="flex flex-col">
							<div className="text-lg text-white font-bold">{person.name}</div>
							<div className="text-sm text-gray-300">{person.city}</div>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="text-4 text-white font-bold">{person.name}</div>
						<div className="text-sm text-white/50">{person.age}</div>
					</div>
				</div>
			))}
		</div>
	);
}
