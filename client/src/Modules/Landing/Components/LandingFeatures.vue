<script lang="ts" setup>
import ZapIcon from "@Assets/Icons/zap.svg";
import UsersIcon from "@Assets/Icons/users.svg";
import LayersIcon from "@Assets/Icons/layers.svg";
import ChartsIcon from "@Assets/Icons/charts.svg";
import MessageIcon from "@Assets/Icons/message.svg";
import CalendarIcon from "@Assets/Icons/calendar.svg";
import LandingFeatureCard from './LandingFeatureCard.vue';
</script>

<template>
  <section id="features" class="border-b border-zinc-800 py-20 flex justify-center">
    <div class="container px-8 md:px-20">

      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to manage projects
        </h2>
        <p class="text-lg text-zinc-400">
          Powerful features that adapt to how your team works, not the other way around.
        </p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <LandingFeatureCard :icon="LayersIcon" title="Task Management"
          description="Create, assign, and track tasks with customizable workflows that adapt to your team's needs." />

        <LandingFeatureCard :icon="ChartsIcon" title="Dashboards & Reports"
          description="Get real-time insights with customizable dashboards and detailed reports to track progress." />

        <LandingFeatureCard :icon="CalendarIcon" title="Timeline & Planning"
          description="Visualize project timelines, set milestones, and manage resources with intuitive planning tools." />

        <LandingFeatureCard :icon="UsersIcon" title="Team Collaboration"
          description="Foster teamwork with shared workspaces, comments, and @mentions to keep everyone aligned." />

        <LandingFeatureCard :icon="ZapIcon" title="Automations"
          description="Save time with powerful automations that handle repetitive tasks and streamline workflows." />

        <LandingFeatureCard :icon="MessageIcon" title="Integrated Chat"
          description="Communicate in context with built-in messaging that keeps conversations tied to projects." />
      </div>

    </div>
  </section>
</template>