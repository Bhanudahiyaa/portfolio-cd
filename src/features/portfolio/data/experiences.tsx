import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "zineps",
    companyName: "Zineps",
    companyLogo: "https://www.zineps.com/zineps-favicon.png",
    companyWebsite: "https://zineps.com",
    positions: [
      {
        id: "1",
        title: "Product Full Stack Engineer",
        employmentPeriod: {
          start: "05.2026",
        },
        icon: <CodeXmlIcon />,
        description:
          "- Building and maintaining core logistics infrastructure and product features supporting shipment workflows processing 250k+ shipments per month.\n- Shipping reliable, production grade code through feature development, bug resolution, testing, and ongoing system improvements.",
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "actory-ai",
    companyName: "Actory AI",
    companyLogo: "https://www.actory.ai/favicon.ico",
    companyWebsite: "https://actory.ai",
    positions: [
      {
        id: "1",
        title: "Founding Engineer",
        employmentPeriod: {
          start: "09.2025",
        },
        icon: <CodeXmlIcon />,
        description:
          "- Architected and built the platform from scratch, owning backend, frontend, infrastructure, deployments, and production reliability.\n- Led technical execution with founders, establishing engineering standards, documentation, release processes, and scalable system architecture.",
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "firstcontact",
    companyName: "FirstContact",
    companyLogo:
      "https://static.wixstatic.com/media/5ed210_af0babcbc7904da29568647610664b0b%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/5ed210_af0babcbc7904da29568647610664b0b%7Emv2.png",
    companyWebsite: "https://firstcontact.co.in",
    positions: [
      {
        id: "1",
        title: "Backend Developer Intern",
        employmentPeriod: {
          start: "05.2025",
          end: "08.2025",
        },
        icon: <CodeXmlIcon />,
        description:
          "- Built backend services and CMS workflows for dynamic content management and automated business processes.\n- Diagnosed and resolved server side issues, improving platform stability and reducing operational downtime.",
        isExpanded: true,
      },
    ],
  },
]
