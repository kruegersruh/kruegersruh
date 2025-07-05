import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import rrulePlugin from '@fullcalendar/rrule'
import deLocale from '@fullcalendar/core/locales/de'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

// https://fullcalendar.io/docs/react
// https://fullcalendar.io/docs/list-view
// https://fullcalendar.io/docs/event-object
// https://fullcalendar.io/docs/rrule-plugin
// https://dateutil.readthedocs.io/en/stable/rrule.html
// https://fullcalendar.io/docs/google-calendar

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ googleCalendarPlugin, rrulePlugin, listPlugin ]}
      googleCalendarApiKey='AIzaSyAdplIqmONF4uGdW8d4ATAoMsfTQYbwYZc'
      initialView='listYear'
      height="auto"
      weekends={true}
      showNonCurrentDates={false}
      locale={deLocale}
      buttonText={{
        month: 'Monat',
        year: 'Jahr'  
      }}
      headerToolbar={{
        left: '',
        center: 'title',
        right: 'listMonth listYear prev,next'
      }}
      listDayFormat={{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        weekday: 'long'
      }}
      listDaySideFormat={false}
      allDayText='ganztägig'
      validRange={function (nowDate) {
        return {
          start: nowDate
        };
      }}
      eventSources={[
          {
            googleCalendarId: 'kruegersruh@mailbox.org'
          },
          {
            googleCalendarId: '85fe5fbed40c05300ca9c63ae8365d1c88fb4c806c91b05d517a237ad37324cf@group.calendar.google.com',
            className: 'festausschuss'
          },
          {
            googleCalendarId: '2c7448e98c45b3bc920ab96a4645b298a49c2e4ea204f124a70e89e6f6319285@group.calendar.google.com',
            className: 'gemeinschaftsarbeit'
          }
        ]
      }
      eventDataTransform={function (eventData) {
        eventData.backgroundColor = '#0b85f7'  
        eventData.url = '/kalender'

        if (eventData.title?.match(new RegExp(['vorstand'].join("|"), "gi"))) {
          eventData.backgroundColor = '#f70b0b';
          eventData.url = '/vorstand'
        }

        if (eventData.title?.match(new RegExp(['fest', 'feier', 'party', 'abend'].join("|"), "gi"))) {
          eventData.backgroundColor = '#f0f70b';
          eventData.url = '/festausschuss'
        }

        if (eventData.title?.match(new RegExp(['gemeinschaftsarbeit'].join("|"), "gi"))) {
          eventData.backgroundColor = '#124037';
          eventData.url = '/gemeinschaftsarbeit'
        }

        }
      }
      eventClick={function (event) {
        if (event.event.url.includes("google.com") ) {
          event.jsEvent.stopPropagation();
          event.jsEvent.preventDefault();
        }
      }
    }
    />
  )
}




