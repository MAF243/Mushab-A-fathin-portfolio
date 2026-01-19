import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '@/i18n/config';
import { getNotesByLocale, getAllTags } from '@/data/notes';
import NoteCard from '@/components/molecules/NoteCard';
import TagFilter from '@/components/molecules/TagFilter';

interface NotesListProps {
  limit?: number;
  showFilter?: boolean;
}

const NotesList = ({ limit, showFilter = true }: NotesListProps) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allNotes = getNotesByLocale(locale);
  const tags = getAllTags(locale);

  let filteredNotes = selectedTag
    ? allNotes.filter((note) => note.tags.includes(selectedTag))
    : allNotes;

  if (limit) {
    filteredNotes = filteredNotes.slice(0, limit);
  }

  return (
    <div>
      {showFilter && tags.length > 0 && (
        <TagFilter
          tags={tags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
          allLabel={t('notes.allTags')}
          className="mb-8"
        />
      )}

      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-12">{t('notes.noNotes')}</p>
      )}
    </div>
  );
};

export default NotesList;
