<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';

	interface TeamMember {
		name: string;
		role: string;
		image: string;
		initials: string;
	}

	const teamMembers: TeamMember[] = [
		{
			name: 'Günter Löscher',
			role: 'Geschäftsführer',
			image: 'https://dummyimage.com/80x80',
			initials: 'GL'
		},
		{
			name: 'Maria Löscher',
			role: 'Prokuristin',
			image: 'https://dummyimage.com/84x84',
			initials: 'ML'
		},
		{
			name: 'Stefan Berger',
			role: 'Vertriebsleiter',
			image: 'https://dummyimage.com/88x88',
			initials: 'SB'
		},
		{
			name: 'Anna Huber',
			role: 'Produktionsleitung',
			image: 'https://dummyimage.com/90x90',
			initials: 'AH'
		},
		{
			name: 'Thomas Maier',
			role: 'Qualitätsmanagement',
			image: 'https://dummyimage.com/94x94',
			initials: 'TM'
		},
		{
			name: 'Elisabeth Gruber',
			role: 'Design & Kreation',
			image: 'https://dummyimage.com/98x98',
			initials: 'EG'
		}
	];
</script>

<section class="text-foreground">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h2 class="text-4xl font-medium lg:text-5xl mb-4">Unser Team</h2>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base text-muted-foreground">
				Hinter Löscher Gardinen steht ein engagiertes Team aus erfahrenen Fachleuten, die mit
				Leidenschaft und Expertise für höchste Qualität und Innovation sorgen.
			</p>
		</div>
		<div class="flex flex-wrap -m-2">
			{#each teamMembers as member (member.name)}
				<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
					<Card.Root class="h-full">
						<Card.Content class="flex items-center gap-4 p-4">
							<Avatar.Root class="size-16 shrink-0">
								<Avatar.Image src={member.image} alt={member.name} />
								<Avatar.Fallback>{member.initials}</Avatar.Fallback>
							</Avatar.Root>
							<div class="grow">
								<h2 class="font-medium">{member.name}</h2>
								<p class="text-muted-foreground">{member.role}</p>
							</div>
						</Card.Content>
					</Card.Root>
				</div>
			{/each}
		</div>
	</div>
</section>
