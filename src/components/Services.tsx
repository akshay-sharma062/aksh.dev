"use client";
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';

export const Services = () => (
  <section className="py-24 bg-[#0A0A0A] text-primary" id="services">
    <h2 className="text-center text-4xl font-heading mb-12">WHAT I BUILD</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 max-w-7xl mx-auto">
      {services.map((svc) => (
        <ServiceCard
          key={svc.id}
          title={svc.title}
          description={svc.description}
          icon={svc.icon}
        />
      ))}
    </div>
  </section>
);
