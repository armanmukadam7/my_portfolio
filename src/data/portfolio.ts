export type IconName =
    | 'cloud'
    | 'layers'
    | 'shield'
    | 'database'
    | 'activity'
    | 'terminal';

export type Project = {
    title: string;
    description: string;
    tags: string[];
};

export type Experience = {
    role: string;
    period: string;
    description: string;
};

export const portfolio = {
    name: 'Arman Mukadam',
    role: 'Solutions Architect',
    location: 'Mumbai, India',

    intro:
        'Designing resilient, scalable systems that turn complex business requirements into reliable technology.',

    email: 'armannmukadam@gmail.com',

    linkedin: 'https://www.linkedin.com/in/arman-mukadam-b24088223/',

    github: 'https://github.com/yourname',

    metrics: [
        ['08+', 'Years architecture'],
        ['40+', 'Systems shipped'],
        ['03', 'Cloud platforms'],
        ['99.95%', 'Uptime delivered'],
    ],

    principles: [
        {
            icon: 'layers' as IconName,
            title: 'Architecture',
            text: 'Distributed systems, microservices, event-driven architecture and domain-driven design.',
        },
        {
            icon: 'cloud' as IconName,
            title: 'Cloud',
            text: 'AWS, Azure and GCP with infrastructure designed for scale, resilience and cost efficiency.',
        },
        {
            icon: 'shield' as IconName,
            title: 'Reliability',
            text: 'Security, observability, disaster recovery and zero-downtime migration strategies.',
        },
        {
            icon: 'terminal' as IconName,
            title: 'Delivery',
            text: 'CI/CD, infrastructure as code, automation and engineering practices that reduce operational friction.',
        },
    ],

    skills: {
        'Architecture & Design': [
            'Microservices',
            'Event-driven systems',
            'API design',
            'Domain-driven design',
            'Distributed systems',
            'Zero-downtime migrations',
        ],
        Infrastructure: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'],
        'Delivery & Operations': [
            'CI/CD',
            'Observability',
            'Cost optimization',
            'Security review',
            'Incident response',
        ],
    },

    projects: [
        {
            title: 'Retail Platform Re-architecture',
            description:
                'Redesigned a tightly coupled platform around independently deployable services and resilient integration patterns.',
            tags: ['Microservices', 'AWS', 'Kubernetes', 'Terraform'],
        },
        {
            title: 'Real-time Analytics Pipeline',
            description:
                'Designed a streaming architecture for high-volume event ingestion, processing and near-real-time analytics.',
            tags: ['Event-driven', 'Streaming', 'Cloud', 'Observability'],
        },
        {
            title: 'Multi-region Failover Design',
            description:
                'Designed a resilient multi-region strategy focused on availability, recovery objectives and controlled failover.',
            tags: ['HA', 'DR', 'Multi-region', 'Automation'],
        },
        {
            title: 'Internal Developer Platform',
            description:
                'Created reusable infrastructure and delivery patterns to standardize how engineering teams build and deploy services.',
            tags: ['Platform Engineering', 'Kubernetes', 'CI/CD', 'IaC'],
        },
    ] satisfies Project[],

    experience: [
        {
            role: 'DevOps Engineer',
            period: '2025 — Present',
            description:
                'Leading architecture decisions across distributed systems, cloud infrastructure, reliability and technical delivery.',
        },
        {
            role: 'Web Developer',
            period: '2022 — 2024',
            description:
                'Designed cloud-native platforms, migration strategies and infrastructure automation across modern cloud environments.',
        },
    ] satisfies Experience[],
} as const;