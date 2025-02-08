"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const JournalForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [journal, setJournal] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <form className="journal-form">
        <div>
          <label htmlFor="title" className="startup-form_label">
            Title
          </label>
          <Input
            id="title"
            name="title"
            className="startup-form_input"
            required
            placeholder="Journal Title"
          />

          {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>

        <div className="mt-5">
          <label htmlFor="description" className="startup-form_label">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            className="startup-form_textarea"
            required
            placeholder="Journal Description"
          />

          {errors.description && (
            <p className="startup-form_error">{errors.description}</p>
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="category" className="startup-form_label">
            Category
          </label>
          <Input
            id="category"
            name="category"
            className="startup-form_input"
            required
            placeholder="Journal Category (attraction, travel tips, activities...)"
          />

          {errors.category && (
            <p className="startup-form_error">{errors.category}</p>
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="link" className="startup-form_label">
            Upload Image
          </label>
          <Input
            id="link"
            name="link"
            className="startup-form_input"
            required
            placeholder="Journal Image URL"
          />

          {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>

        <div className="mt-5" data-color-mode="light">
          <label htmlFor="journal" className="startup-form_label">
            Journal
          </label>

          <MDEditor
            value={journal}
            onChange={(value) => setJournal(value as string)}
            id="journal"
            preview="edit"
            height={300}
            style={{ borderRadius: 20, overflow: "hidden" }}
            textareaProps={{
              placeholder: "Briefly describe your experience and suggestion",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />

          {errors.journal && (
            <p className="startup-form_error">{errors.journal}</p>
          )}
        </div>

        <Button className="btn_green mt-5 w-full">
          Submit Your Journal
          <Send className="size-6 ml-2" />
        </Button>
      </form>
    </div>
  );
};

export default JournalForm;
